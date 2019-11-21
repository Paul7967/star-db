export default class DummySwapiService {

  _people = [
	{
		id: 1,
		name: 'Luke Skywalker', 
		gender: 'male', 
		birthYear: '19BBY', 
		eyeColor: 'blue'
	}, 
	{
		id: 2,
		name: 'C-3PO', 
		gender: 'n/a', 
		birthYear: '112BBY', 
		eyeColor: 'yellow'
	}, 
	{
		id: 3,
		name: 'R2-D2', 
		gender: 'n/a', 
		birthYear: '33BBY', 
		eyeColor: 'red'
	}, 
	{
		id: 4,
		name: 'Darth Vader', 
		gender: 'male', 
		birthYear: '41.9BBY', 
		eyeColor: 'yellow'
	}, 
	{
		id: 5,
		name: 'Leia Organa', 
		gender: 'female', 
		birthYear: '19BBY', 
		eyeColor: 'brown'
	}, 
	{
		id: 6,
		name: 'Owen Lars', 
		gender: 'male', 
		birthYear: '52BBY', 
		eyeColor: 'blue'
	}, 
	{
		id: 7,
		name: 'Beru Whitesun lars', 
		gender: 'female', 
		birthYear: '47BBY', 
		eyeColor: 'blue'
	}, 
	{
		id: 8,
		name: 'R5-D4', 
		gender: 'n/a', 
		birthYear: 'unknown', 
		eyeColor: 'red'
	}, 
	{
		id: 9,
		name: 'Biggs Darklighter', 
		gender: 'male', 
		birthYear: '24BBY', 
		eyeColor: 'brown'
	}, 
	{
		id: 10,
		name: 'Obi-Wan Kenobi', 
		gender: 'male', 
		birthYear: '57BBY', 
		eyeColor: 'blue-gray'
	}
  ];

  _planets = [
    {
		id: 1,
		name: 'Earth [TEST DATA]',
		population: '7.530.000.000',
		rotationPeriod: '23 hours 56 seconds',
		diameter: '12.742 km'
    },
    {
		id: 2,
		name: 'Venus [TEST DATA]',
		population: 'not known',
		rotationPeriod: '243 days',
		diameter: '12.104 km'
	},
	{
		id: 3,
		name: 'Alderaan', 
		population: '2000000000',
		rotation_period: '24', 
		diameter: '12500' 
	}, 
	{
		id: 4,
		name: 'Yavin IV', 
		population: '1000', 
		rotation_period: '24', 
		diameter: '10200'
	}, 
	{
		id: 5,
		name: 'Hoth', 
		population: 'unknown', 
		rotation_period: '23', 
		diameter: '7200'
	}, 
	{
		id: 6,
		name: 'Dagobah', 
		population: 'unknown', 
		rotation_period: '23', 
		diameter: '8900'
	}, 
	{
		id: 7,
		name: 'Bespin', 
		population: '6000000', 
		rotation_period: '12', 
		diameter: '118000'
	}, 
	{
		id: 8,
		name: 'Endor', 
		population: '30000000', 
		rotation_period: '18', 
		diameter: '4900'
	}
  ];

  _starships = [
    {
		id: '1',
		name: 'USS Enterprise [TEST DATA]',
		model: 'NCC-1701-C',
		manufacturer: 'Northrop Grumman Shipbuilding',
		costInCredits: 'not known',
		length: 'approx 300 meters',
		crew: 1000,
		passengers: 50,
		cargoCapacity: 100
	},
	{
		id: '2',
        name: 'Executor', 
		model: 'Executor-class star dreadnought', 
		manufacturer: 'Kuat Drive Yards, Fondor Shipyards', 
		costInCredits: '1143350000', 
		length: '19000', 
		crew: 279144, 
		passengers: 38000, 
		cargoCapacity: 250000000
	}, 
	{
		id: '3',
        name: 'Sentinel-class landing craft', 
		model: 'Sentinel-class landing craft', 
		manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks', 
		costInCredits: '240000', 
		length: '38', 
		crew: 5, 
		passengers: 75,
		cargoCapacity: 180000 
	}, 
	{
		id: '4',
        name: 'Death Star', 
		model: 'DS-1 Orbital Battle Station', 
		manufacturer: 'Imperial Department of Military Research, Sienar Fleet Systems', 
		costInCredits: '1000000000000', 
		length: '120000', 
		crew: '342953', 
		cargoCapacity: '1000000000000', 
		passengers: '843342'
	}, 
	{
		id: '5',
        name: 'Millennium Falcon', 
		model: 'YT-1300 light freighter', 
		manufacturer: 'Corellian Engineering Corporation', 
		costInCredits: '100000', 
		length: '34.37', 
		crew: '4', 
		passengers: '6', 
		cargoCapacity: '100000'
	}, 
	{
		id: '6',
        name: 'Y-wing', 
		model: 'BTL Y-wing', 
		manufacturer: 'Koensayr Manufacturing', 
		costInCredits: '134999', 
		length: '14', 
		crew: '2', 
		passengers: '0', 
		cargoCapacity: '110'
	}, 
	{
		id: '7',
        name: 'X-wing', 
		model: 'T-65 X-wing', 
		manufacturer: 'Incom Corporation', 
		costInCredits: '149999', 
		length: '12.5', 
		crew: '1', 
		passengers: '0', 
		cargoCapacity: '110'
	}, 
	{
		id: '8',
        name: 'TIE Advanced x1', 
		model: 'Twin Ion Engine Advanced x1', 
		manufacturer: 'Sienar Fleet Systems', 
		costInCredits: 'unknown', 
		length: '9.2', 
		crew: '1', 
		passengers: '0', 
		cargoCapacity: '150'
	}, 
	{
		id: '9',
        name: 'Slave 1', 
		model: 'Firespray-31-class patrol and attack', 
		manufacturer: 'Kuat Systems Engineering', 
		costInCredits: 'unknown', 
		length: '21.5', 
		crew: '1', 
		passengers: '6', 
		cargoCapacity: '70000'
	}
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async (id) => {
    return this._people[id-1];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async (id) => {
    return this._planets[id-1]
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async (id) => {
    return this._starships[id-1];
  };

  getPersonImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getStarshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage = () => {
    return `https://placeimg.com/400/400/nature`
  };
}
