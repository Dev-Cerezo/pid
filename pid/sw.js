// imports
importScripts('js/sw-utils.js');


const STATIC_CACHE    = 'static-v1';
const DYNAMIC_CACHE   = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';


const APP_SHELL = [
         //'/',
         'index.html',
         'estilos/estyle.css',
         'imagenes/icons/icon-72x72.png',
         'imagenes/icons/icon-96x96.png',
         'imagenes/icons/icon-128x128.png',
         'imagenes/icons/icon-144x144.png',
         'imagenes/icons/icon-152x152.png',
         'imagenes/icons/icon-192x192.png',
         'imagenes/icons/icon-384x384.png',
         'imagenes/icons/icon-512x512.png',
         'images/ElCerezoOriginal.webp',
         'js/sw-utils.js',
         'js/app.js'
];

const APP_SHELL_INMUTABLE = [
    '//cdn.jsdelivr.net/npm/sweetalert2@11',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js'
];



self.addEventListener('install', e => { //instala los app shells


    const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));



    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

});


self.addEventListener('activate', e => {  //borra caches viejos

    const respuesta = caches.keys().then( keys => {
     
        keys.forEach( key => {
            //console.log(key, STATIC_CACHE)
            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

            if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );

});





self.addEventListener( 'fetch', e => {//cargar las apis al cache dinamico y actualizar cache dinamico y estatico
//console.log("request", e.request)
    let respuesta;
    if( e.request.url.includes('/api') ){
        
   respuesta = manejoApiMensajes(DYNAMIC_CACHE, e.request);
    }else{

     respuesta = caches.match( e.request ).then( res => {
  console.log("resultado",res)
            if ( res ) {
                
                actualizaCacheStatico( STATIC_CACHE, e.request, APP_SHELL_INMUTABLE );
                return res;
            } else {
    
                return fetch( e.request ).then( newRes => {
    
                    return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );
    
                });
    
            }
    
        });
    
    }


    


    e.respondWith( respuesta );

});


