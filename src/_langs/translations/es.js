export default {
	"meta": {
		"index": {
			"title": "_XPROJECTNAME_ = Svelte + Sapper + Firebase = ❤",
			"description": "Plataforma simple, confiable y altamente personalizable para crear aplicaciones móviles modernas hiperreactivas y ultra fáciles de usar."
		},
		"info": {
			"about": {
				"title": "Acerca de _XPROJECTNAME_",
				"description": ""
			},
			"showcase": {
				"title": "Construido con _XPROJECTNAME_",
				"description": "Diferentes proyectos que se construyeron usando _XPROJECTNAME_."
			}
		},
		"changelog": {
			"title": "_XPROJECTNAME_ Registro de cambios",
			"description": ""
		}
	},
	"layout": {
		"nav": {
			"links": {
				"home": {
					"text": "SB",
					"title": "_XPROJECTNAME_"
				},
				"about": {
					"text": "Sobre",
					"title": "Lea acerca de _XPROJECTNAME_."
				},
				"showcase": {
					"text": "Proyectos",
					"title": "Proyectos construidos con _XPROJECTNAME_."
				},
				"changelog": {
					"text": "registro de cambios",
					"title": "Historial de versiones."
				}
			}
		},
		"footer": {
			"info": {
				"heading": "Información",
				"links": {
					"about": "Acerca de _XPROJECTNAME_",
					"showcase": "Ejemplos",
					"changelog": "registro de cambios"
				}
			},
			"languages": {
				"heading": "Idiomas"
			}
		}
	},
	"page": {
		"index": {
			"intro": {
				"heading": "_XPROJECTNAME_",
				"description": "Modelo estándar de Sapper y Firebase.",
				"content": "_XPROJECTNAME_ es un proyecto de pasatiempo que se inició hace unos años con un objetivo:\npara crear un marco web ligero, simple y moderno que haga que la creación de prototipos y el desarrollo de proyectos web de cualquier escala sean fáciles y divertidos,\nmientras aprovecha lo mejor de las herramientas modernas y sigue prácticas simples e intuitivas que encienden tanto\narquitectura creativa e inteligente."
			},
			"sections": {
				"features": {
					"heading": "Características",
					"items": [
						{
							"heading": "Varios idiomas listos para usar",
							"description": "<ul class=\"browser-default\"><li>El contenido generado del lado del servidor viene traducido</li><li> Traductor JSON incorporado usando <u>GoogleTranslate</u></li><li> Habilidad para conservar valores dinámicos en el contenido del texto usando <u>XDATA</u> (solución hacky complicada)</li><li> Solución de modelos de Firebase traducibles</li></ul>"
						},
						{
							"heading": "Compatible con SEO",
							"description": "<ul class=\"browser-default\"><li>SSR: representación del lado del servidor proporcionada por Sapper</li><li> Componente de análisis de Google</li><li> Urls multilingües adecuados y uso de meta hreflang</li><li> Generador de mapa del sitio</li></ul>"
						},
						{
							"heading": "Redirecciones sofisticadas",
							"description": "Los redireccionamientos configurables del lado del servidor le permiten configurar redireccionamientos de URL con facilidad, así como crear reglas y comportamientos de redireccionamiento complicados."
						},
						{
							"heading": "deslumbrantemente rápido",
							"description": "Cualquiera que haya oído hablar de Svelte en primer lugar sabe que es absolutamente el <b>marco SPA completo más rápido y ligero</b> del mundo.<p> _XPROJECTNAME_ no afectó el rendimiento de Svelte y Sapper. Firebase también es uno de los BE más rápidos si se usa correctamente.</p><p> Los sitios web creados con _XPROJECTNAME_ obtienen un punto de <u>referencia de 100</u> en PageSpped para dispositivos móviles y de escritorio.</p>"
						},
						{
							"heading": "Emuladores locales de Firebase",
							"description": "Firebase es un sistema maduro que proporciona suficientes funciones y herramientas para desarrollar y probar todo localmente."
						}
					]
				},
				"drawbacks": {
					"heading": "Problemas y desafíos",
					"items": [
						{
							"heading": "sincronización de package.json y functions/package.json",
							"description": "La configuración de _XPROJECTNAME_ requiere tener contenido del directorio /functions cuyo contenido se implementará en Firebase.<p> Por lo tanto, necesita su propio paquete.json que incluye los paquetes necesarios tanto para Svelte &amp; Sapper como para Firebase.</p><p> Básicamente, significa que cualquier paquete que se agregue a <u>package.json</u> durante el proceso de desarrollo deberá agregarse a <u>functions/packages.json</u> .</p>"
						},
						{
							"heading": "Sin acceso al atributo lang de la etiqueta de apertura html",
							"description": "Para obtener la mejor plataforma multilingüe, también debe especificar el atributo lang en la etiqueta html raíz.<p> Pero, lamentablemente, la versión actual de Sapper no admite marcadores de posición personalizados en <u>template.html</u> .</p><p> Es por eso que, de forma predeterminada, el <u>atributo lang</u> no se especifica y solo usamos metadatos <u>hreflang</u> .</p>"
						},
						{
							"heading": "Materializar CSS",
							"description": "Actualmente, _XPROJECTNAME_ utiliza Materialise como marco CSS porque es simple e intuitivamente fácil de usar.\nSin embargo, parece que no está mejorando mucho y no crece.\nTambién en mis proyectos personales ya comencé a notar muchas limitaciones y ahora considero cambiar a otro Framework CSS\no introducir la capacidad de utilizar diferentes marcos."
						},
						{
							"heading": "Los scripts del lado del servidor y del lado del cliente pueden ser confusos",
							"description": "<ul><li>Las páginas Sapper utilizan dos tipos de scripts de tiempo de ejecución: del lado del servidor y del lado del cliente.</li><li> Los scripts del lado del servidor usan el entorno <u>node.js</u> ; tienen el atributo <u>context=&quot;module&quot;</u></li><li> Los scripts del lado del cliente usan el entorno del navegador</li><li> Si desea obtener todos los beneficios de SSR, debe usar secuencias de comandos del lado del servidor para representar el contenido necesario en el lado del servidor.</li></ul>"
						}
					]
				},
				"firebase_downsides": {
					"heading": "Desventajas de Firebase",
					"items": [
						{
							"heading": "Cantidad limitada de proyectos en Firebase",
							"description": "De forma predeterminada, puede crear hasta 5 proyectos en Firebase. Pero si necesita más, se le pedirá que solicite proyectos adicionales."
						},
						{
							"heading": "Paginación de Firestore",
							"description": "Con Firebase no hay forma de implementar la paginación clásica con <u>desplazamiento y límite</u> y, en su lugar, debe usar conceptos como &quot;startAfter&quot; o &quot;startAt&quot; para indicar después o en qué punto desea obtener el conjunto de datos."
						},
						{
							"heading": "Sincronización de índices de Firestore",
							"description": "Firestore le permite (y para algunas consultas lo requiere) usar índices para tener un rendimiento adecuado de las consultas.<p> Sin embargo, permite configurar índices usando <u>Firebase Console</u> y <u>firestore.indexes.json</u> .</p><p> Pero si los índices se configuran con <u>Firebase Console</u> , no se reflejarán automáticamente en <u>firestore.indexes.json</u> .</p><p> Por lo tanto, debe hacerlo manualmente, porque si implementa su código en otro proyecto de Firebase, deberá configurar los índices nuevamente.</p>"
						},
						{
							"heading": "Respuesta lenta de la red",
							"description": "Firebase parece tener un retraso de inicio en frío, cuando la función del nodo no se ejecuta con la frecuencia suficiente."
						}
					]
				}
			}
		},
		"info": {
			"showcase": {
				"heading": "Construido con _XPROJECTNAME_",
				"description": "Estos son ejemplos de los proyectos que se crearon con _XPROJECTNAME_.",
				"projects": {
					"item": {
						"website": "sitio web"
					},
					"list": {
						"strangy": {
							"description": "Una plataforma para la comunicación libre y abierta."
						},
						"hotauto": {
							"description": "Un proyecto SEO simple para la venta de autos usados."
						},
						"svitanok": {
							"description": "Una aplicación donde puedes encontrar a cualquier profesional individual, crear citas y dejar comentarios sobre las visitas."
						}
					}
				}
			},
			"about": {
				"heading": "Acerca de _XPROJECTNAME_",
				"description": "Sapper & Firebase es como la mantequilla de maní y la jalea.",
				"sections": {
					"backstory": {
						"heading": "Trasfondo",
						"content": "Hace aproximadamente 2 años decidí crear algunos proyectos web por motivos personales..."
					},
					"disclaimer": {
						"heading": "Descargo de responsabilidad",
						"content": "_XPROJECTNAME_ es solo un concepto repetitivo basado en el entusiasmo que no está diseñado para uso comercial.\nSin embargo, si está seguro de que puede crear con éxito una aplicación confiable y estable usando _XPROJECTNAME_\n- No hay restricciones ni permisos que deba obtener para usarlo."
					}
				}
			}
		},
		"changelog": {
			"heading": "registro de cambios",
			"description": "",
			"changes_list": {
				"heading": "Últimos cambios"
			},
			"changelog_form": {
				"inputs": {
					"version": "Versión",
					"details": "Detalles"
				}
			}
		}
	}
}