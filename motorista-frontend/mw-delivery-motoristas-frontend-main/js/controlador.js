var id;
var seccionSeleccionada=0;
function mostrarSeccion(idSeccion) {
    // Ocultar todas las secciones
    seccionSeleccionada=idSeccion;
    if(idSeccion==0){
      document.getElementById('barra-navegacion').style.display='none';
      
    }else{
      document.getElementById('barra-navegacion').style.display='block'
    }
    var secciones = document.getElementsByTagName('section');
    for (var i = 0; i < secciones.length; i++) {
       
      secciones[i].style.display = 'none';
      console.log(i);
     
    }
    console.log(secciones);
    // Mostrar la sección seleccionada
    var seccion = document.getElementById(idSeccion);
    seccion.style.display = 'block';
    console.log(`mostrando seccion ${idSeccion}`)
    switch (idSeccion) {
      case 2:
        colorIconos(0);
        break;
      case 3:
        colorIconos(1);
        break;
      
      case 4:
        colorIconos(2);
        break;

      case 7:
        colorIconos(3);
        break;
      default:
        break;
    }
  }



var iconos;
const colorIconos=(num)=>{
   iconos=document.getElementsByTagName('a');
  for (let i=0;i<iconos.length;i++){
    iconos[i].classList.remove('color-verde');
  }
  iconos[num].classList.add('color-verde');
}

  var clientes=[
  {
    id:'1',
    nombre:'Taylor Sanchez',
    fecha: '12/05/21',
    tienda: 'STRADIVARIUS',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
    total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO ',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]

  },
  {
    id:'2',
    nombre:'Ariana Gigante',
    fecha: '12/05/21',
    tienda: 'BERSHKA',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'3',
    nombre:'Beyonce Dominguez',
    fecha: '12/05/21',
    tienda: 'BERSHKA',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'4',
    nombre:'Miley Gonzales',
    fecha: '12/05/21',
    tienda: 'P&B',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'5',
    nombre:'Lana Reyes',
    fecha: '12/05/21',
    tienda: 'ZARA',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'6',
    nombre:'Sza del Cid',
    fecha: '12/05/21',
    tienda: 'P&B',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'7',
    nombre:'Serena Gomez',
    fecha: '12/05/21',
    tienda: 'STRADIVARIUS',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'8',
    nombre:'Lesly Gaga',
    fecha: '12/05/21',
    tienda: 'STRADIVARIUS',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'9',
    nombre:'Madonna Perez',
    fecha: '12/05/21',
tienda: 'BERSHKA',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }
    ]
  },
  {
    id:'10',
    nombre:'Mariah Caceres',
    fecha: '12/05/21',
    tienda: 'STRADIVARIUS',
    direccion:'Hollywood Hills, 1234 Seccion 14',
    ciudad:'NARNIA',
    telefono:'+50433333333',
     total:'5352.75',
    detalleItems:[
      {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',


      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      },
            {
        idProducto:'1989-ID ',
        cantidad:5,
        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',
        precioUnitario: 214.11,
        precioTotal:'1070.55',

      }

      

      
    ]
  },
]

var clientesPendientes=[  
  {    id:'1',    
  nombre:'Taylor Sanchez',    fecha: '12/05/21',    tienda: 'STRADIVARIUS',    direccion:'Hollywood Hills, 1234 Seccion 14',    ciudad:'NARNIA',    telefono:'+50433333333',    total:'5352.75',    detalleItems:[      {        idProducto:'1989-ID ',        cantidad:5,        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO ',        precioUnitario: 214.11,        precioTotal:'1070.55',      },      {        idProducto:'1989-ID ',        cantidad:5,        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',        precioUnitario: 214.11,        precioTotal:'1070.55',      },      {        idProducto:'1989-ID ',        cantidad:5,        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',        precioUnitario: 214.11,        precioTotal:'1070.55',      },      {        idProducto:'1989-ID ',        cantidad:5,        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',        precioUnitario: 214.11,        precioTotal:'1070.55',      },      {        idProducto:'1989-ID ',        cantidad:5,        descripcion:'CAMISA-BLANCA-ESPECIAL-INVIERNO',        precioUnitario: 214.11,        precioTotal:'1070.55',      }    ]
},
{
  id:'2',
  nombre:'Emma Smith',
  fecha: '12/06/21',
  tienda: 'BERSHKA',
  direccion:'456 Elm St',
  ciudad:'NEW YORK',
  telefono:'+1-555-555-5555',
  total:'1234.56',
  detalleItems:[
    {
      idProducto:'1001-ID ',
      cantidad:2,
      descripcion:'VESTIDO-NEGRO-CORTO',
      precioUnitario: 89.99,
      precioTotal:'179.98',
    },
    {
      idProducto:'1002-ID ',
      cantidad:1,
      descripcion:'BOTAS-NEGRAS-ALTAS',
      precioUnitario: 149.99,
      precioTotal:'149.99',
    },
    {
      idProducto:'1003-ID ',
      cantidad:3,
      descripcion:'PULSERA-DORADA',
      precioUnitario: 19.99,
      precioTotal:'59.97',
    }
  ]
},
{
  id:'3',
  nombre:'Aiden Johnson',
  fecha: '12/07/21',
  tienda: 'ZARA',
  direccion:'123 Main St',
  ciudad:'LOS ANGELES',
  telefono:'+1-555-555-5555',
  total:'421.22',
  detalleItems:[
    {
      idProducto:'2001-ID ',
      cantidad:1,
      descripcion:'ABRIGO-BEIGE',
      precioUnitario: 199.99,
      precioTotal:'199.99',
    },
    {
      idProducto:'2002-ID ',
      cantidad:3,
      descripcion:'PANTALON-CORTO-BLANCO',
      precioUnitario: 25.99,
      precioTotal:'77.97',
    },
    {
      idProducto:'2003-ID ',
      cantidad:2,
      descripcion:'CAMISETA-RAYADA-ROJA/BLANCA',
      precioUnitario: 24.99,
      precioTotal:'49.98',
      }
      ]
      },
      {
        id:'4',
        nombre:'Olivia Martinez',
        fecha: '12/08/21',
        tienda: 'P&B',
        direccion:'789 Elm St',
        ciudad:'SAN FRANCISCO',
        telefono:'+1-555-555-5555',
        total:'876.54',
        detalleItems:[
          {
          idProducto:'3001-ID ',
          cantidad:4,
          descripcion:'JEANS-DESMANOCHADOS',
          precioUnitario: 59.99,
          precioTotal:'239.96',
          },
          {
          idProducto:'3002-ID ',
          cantidad:2,
          descripcion:'CAMISETA-GRIS-CON-LETRAS',
          precioUnitario: 29.99,
          precioTotal:'59.98',
          },
          {
            idProducto:'3003-ID ',
            cantidad:1,
            descripcion:'CHAQUETA-DE-CUERO-NEGRA',
            precioUnitario: 199.99,
            precioTotal:'199.99',
            },
            {
            idProducto:'3004-ID ',
            cantidad:2,
            descripcion:'BOTINES-MARRONES',
            precioUnitario: 89.99,
            precioTotal:'179.98',
            }
            ]
            }
            ]
   

var indice=0;
var clienteSeleccionado;
renderizarEntregasDisponibles=()=>{
  document.getElementById('cuerpo-dashboard-disponibles').innerHTML="";
  clientes.forEach(cliente=>{
   if (cliente!=null){
    document.getElementById('cuerpo-dashboard-disponibles').innerHTML+=`
    <div id="elemento" class="tarjeta-elemento tarjeta-marco form-control" style="background-color:#CCCCCC">
    <div id=subcontenedor de tarjeta>
    <div id="codigo" style="font-weight:bold">${cliente.id}</div>
    <div id="nombre" style="font-weight:bold">${cliente.nombre}</div>
    <div id="fecha" style="font-weight:bold">${cliente.fecha}</div>
    <div id="tienda" style="font-weight:bold">${cliente.tienda}</div>
    </div>
    <div id="boton-orden" onclick="verDetalleEntregaDisponible(${indice})">
    <i class="fas fa-info-circle" style="font-size:40px; color:#17382B;"></i>
    </div>

  </div>`}
  indice++;
  });

  
  
}

verDetalleEntregaDisponible=(indice)=>{
  mostrarSeccion(5);
  renderizarDetalleEntregaDisponible(indice);
  clienteSeleccionado=indice;
}

renderizarDetalleEntregaDisponible=(indice)=>{
  document.getElementById('informacion-items').innerHTML="";   
  console.log(`Se esta ejecutando este metodo tambien, esto hace referencia ${indice}`);
  document.getElementById('info-direccion').innerHTML=`<p>${clientes[indice].direccion}</p>`;
  document.getElementById('info-ciudad').innerHTML=`<p>${clientes[indice].ciudad}</p>`;
  document.getElementById('info-nombre').innerHTML=`<p>${clientes[indice].nombre}</p>`;
  document.getElementById('info-telefono').innerHTML=`<p>${clientes[indice].telefono}</p>`;
  document.getElementById('info-tienda').innerHTML=`<p>${clientes[indice].tienda}</p>`;
  document.getElementById('info-total').innerHTML=`<p>${clientes[indice].total}</p>`;
  document.getElementById('info-fecha').innerHTML=`<p>${clientes[indice].fecha}</p>`;
  clientes[indice].detalleItems.forEach(item => {
    document.getElementById('informacion-items').innerHTML+=`    
    <div id="contenedor-productos" class="descripcion-items">
    <p id="cantidad">${item.cantidad}</p>
    <p id="descripcion">${item.descripcion}</p>
    <p id="precio-unitario">${item.precioUnitario}</p>
    <p id="precio-total">${item.precioTotal}</p>
    </div>`
    
  });

}

var indicePendiente=0;
renderizarEntregasPendientes=()=>{
  document.getElementById('cuerpo-dashboard-pendientes').innerHTML="";
  clientesPendientes.forEach(cliente=>{
   if (cliente!=null){
    document.getElementById('cuerpo-dashboard-pendientes').innerHTML+=`
    <div id="elemento" class="tarjeta-elemento tarjeta-marco form-control" style="background-color:#CCCCCC">
    <div id=subcontenedor de tarjeta>
    <div id="codigo" style="font-weight:bold">${cliente.id}</div>
    <div id="nombre" style="font-weight:bold">${cliente.nombre}</div>
    <div id="fecha" style="font-weight:bold">${cliente.fecha}</div>
    <div id="tienda" style="font-weight:bold">${cliente.tienda}</div>
    </div>
    <div id="boton-orden" onclick="verDetalleEntregaPendiente(${indicePendiente})">
    <i class="fas fa-info-circle" style="font-size:40px; color:#17382B;"></i>
    </div>

  </div>`}
  indicePendiente++;
  });

}


renderizarDetalleEntregaPendiente=(indicePendiente)=>{
  document.getElementById('informacion-items-pendientes').innerHTML="";   
  console.log(`Se esta ejecutando este metodo tambien, esto hace referencia ${indicePendiente}`);
  document.getElementById('info-direccion-pendiente').innerHTML=`<p>${clientesPendientes[indicePendiente].direccion}</p>`;
  document.getElementById('info-ciudad-pendiente').innerHTML=`<p>${clientesPendientes[indicePendiente].ciudad}</p>`;
  document.getElementById('info-nombre-pendiente').innerHTML=`<p>${clientesPendientes[indicePendiente].nombre}</p>`;
  document.getElementById('info-telefono-pendiente').innerHTML=`<p>${clientesPendientes[indicePendiente].telefono}</p>`;
  document.getElementById('info-tienda-pendiente').innerHTML=`<p>${clientesPendientes[indicePendiente].tienda}</p>`;
  document.getElementById('info-total-pendiente').innerHTML=`<p>${clientesPendientes[indicePendiente].total}</p>`;
  document.getElementById('info-fecha-pendiente').innerHTML=`<p>${clientesPendientes[indicePendiente].fecha}</p>`;
  clientesPendientes[indicePendiente].detalleItems.forEach(item => {
    document.getElementById('informacion-items-pendientes').innerHTML+=`    
    <div id="contenedor-productos" class="descripcion-items">
    <p id="cantidad">${item.cantidad}</p>
    <p id="descripcion">${item.descripcion}</p>
    <p id="precio-unitario">${item.precioUnitario}</p>
    <p id="precio-total">${item.precioTotal}</p>
    </div>`
    
  });

}


verDetalleEntregaPendiente=(indicePendiente)=>{
  mostrarSeccion(6);
  renderizarDetalleEntregaPendiente(indicePendiente);
  clienteSeleccionado=indicePendiente;
}




tomarOrden=()=>{
 
}



  