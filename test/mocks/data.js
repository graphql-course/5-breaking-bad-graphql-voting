const CHARACTERS = [
	{
		id: '1',
		name: 'Walter White',
		actor: 'Bryan Cranston',
		description:
			'Walter "Walt" Hartwell White, también conocido por su seudónimo clandestino "Heisenberg", es un químico y profesor de química de Albuquerque, Nuevo México que, tras ser diagnosticado con cáncer de pulmón inoperable, decide empezar a fabricar metanfetamina para poder mantener a su familia provista de cara al futuro"',
		total_episodes: '62',
		photo: 'BB-S5B-Walt-590.jpg',
		url: 'https://es.wikipedia.org/wiki/Walter_White',
		votes: '0'
	},
	{
		id: '2',
		name: 'Jesse Pinkman',
		actor: 'Aaron Paul',
		description:
			'Jesse Bruce Pinkman es el compañero de Walter White en el tráfico de metanfetamina. En el instituto, Jesse era un consumidor, fabricante y traficante de poca monta de metanfetamina. Era un estudiante que prestaba poca atención a las clases de química de su profesor, el propio Walter. Años después, Jesse se dedica al tráfico de droga con el seudónimo "Cap\'n Cook". Al igual que Walt, a Jesse le perturba la brutalidad existente en los altos niveles del tráfico de droga, pero hace lo que cree ser necesario. A menudo sufre sentimientos de culpa debido a las muertes de personas con la que se ha asociado, todas relacionadas con el negocio. Ocasionalmente va a reuniones de Narcóticos Anónimos para que le ayuden con estos sentimientos',
		total_episodes: '62',
		photo: 'JesseS5B.jpg',
		url: 'https://es.wikipedia.org/wiki/Jesse_Pinkman',
		votes: '0'
	},
	{
		id: '3',
		name: 'Skyler White',
		actor: 'Anna Gunn',
		description:
			'Es la esposa de Walter. Skyler White (de soltera Lambert) es la mujer de Walter White y madre de Walter White Jr. y Holly White. Skyler ha tenido múltiples trabajos o actividades para obtener dinero: escribiendo historias cortas, vendiendo objetos en eBay, trabajando como contable en Beneke Fabricators y ayudando a Walt con el local de lavado. Skyler quiere mucho a Walter, pero su matrimonio pasa a tener problemas debido a sus ausencias y su comportamiento extraño',
		total_episodes: '61',
		photo: 'Skylar_S5b.jpg',
		url: 'https://es.wikipedia.org/wiki/Breaking_Bad',
		votes: '0'
	},
	{
		id: '4',
		name: 'Hank Schrader',
		actor: 'Dean Norris',
		description:
			'Henry R. "Hank" Schrader es el marido de Marie Schrader (hermana de Skyler White) y agente especial a cargo de las oficinas de la DEA en Albuquerque. Un hombre enérgico y bullicioso, Hank es además cuñado de Walter White. A pesar de que es un agente extremadamente competente y que realmente se preocupa por Marie, Walter, Skyler y Walter Jr., su estilo a menudo acaba aislándole del peligro al que se expone diariamente. Comienza a trabajar en el caso referente al traficante de una rarísima metanfetamina color azul "Heisenberg", quien es su mismísimo cuñado, lo que llega a provocarle dificultades en el negocio a Walter.',
		total_episodes: '51',
		photo: 'Hank_S5b.jpg',
		url: 'https://es.wikipedia.org/wiki/Breaking_Bad',
		votes: '0'
	}
];

const VOTES = [
	{ id: '1', character: '1', createdAt: '2019-07-28 08:10:00' },
	{ id: '2', character: '2', createdAt: '2019-07-28 08:10:00' },
	{ id: '3', character: '2', createdAt: '2019-07-28 08:10:00' },
	{ id: '4', character: '1', createdAt: '2019-07-28 08:10:00' },
	{ id: '5', character: '1', createdAt: '2019-07-28 08:10:00' },
	{ id: '6', character: '1', createdAt: '2019-07-28 08:10:00' }
];



module.exports = { CHARACTERS, VOTES };
