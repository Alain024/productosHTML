jQuery(document).ready(function($){
	//add partials
	var myHeader = _.template(
		'<div id="logo">'+
			'<img src="img/logo_kuarc_03.png" alt="">'+
		'</div>'+
		'<nav id="main_menu">'+
			'<ul>'+
				'<li><a href="index.html">INICIO</a></li>'+
				'<li><a href="#">KUARC</a></li>'+
				'<li><a href="productos.html">PRODUCTOS Y SERVICIOS</a></li>'+
				'<li><a href="#">RESPONSABILIDAD SOCIAL</a></li>'+
				'<li><a href="#">CONTÁCTENOS</a></li>'+
			'</ul>'+
		'</nav>'+
		'<nav id="login">'+
			'<ul>'+
				'<li>'+
					'<input type="search" placeholder="BUSCAR" name="txtBuscarGeneral">'+
				'</li>'+
				'<li><a href="#0" class="cd-popup-trigger" id="boton2">REGISTRAR</a></li>'+
				'<li><a href="#">INICIAR</a></li>'+
			'</ul>'+
		'</nav>'
	);
	var myFooter = _.template(
		'<section id="nav_footer">'+
			'<ul>'+
				'<li><a href="#">INICIO</a></li>'+
				'<li><a href="#">KUARC</a></li>'+
				'<li><a href="#">PRODUCTOS Y SERVICIO</a></li>'+
				'<li><a href="#">RESPONSABILIDAD SOCIAL</a></li>'+
				'<li><a href="#">CONTÁCTENOS</a></li>'+
			'</ul>'+
      '</section>'
	); 

	$("header").append(myHeader);
	$("footer").append(myFooter);
	//end partials
});