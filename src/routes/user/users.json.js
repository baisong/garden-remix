/**
 * This was my attempt at creating a local JSON snapshot.
 */
export function get(req, res, next) {
	var records = [{
		id: "138c3bd6-2aa0-4729-ba06-bffed708b57f",
		createdAt: "2022-06-08T08:55:44.426Z",
		updatedAt: "2022-06-08T08:55:44.427Z",
		name: "Oren",
		email: "oren@example.com"
	}, {
		id: "138c3bd6-2aa0-4729-ba06-bffed708b57f",
		createdAt: "2022-06-08T08:55:44.426Z",
		updatedAt: "2022-06-08T08:55:44.427Z",
		name: "Everette",
		email: "Johnson95@yahoo.com"
	}, {
		id: "e200b188-c8e7-48dd-8363-4b697e9c5168",
		createdAt: "2022-06-08T08:55:45.473Z",
		updatedAt: "2022-06-08T08:55:45.474Z",
		name: "Mohammed",
		email: "Ignatius_MacGyver93@gmail.com"
	}, {
		id: "55aa6c57-c471-40a8-84bb-9fdd758a7836",
		createdAt: "2022-06-08T08:55:46.284Z",
		updatedAt: "2022-06-08T08:55:46.284Z",
		name: "Brent",
		email: "Elmo_Prosacco73@yahoo.com"
	}, {
		id: "07fc1e4d-9042-45ea-9d46-2e88a320d5de",
		createdAt: "2022-06-08T08:55:47.084Z",
		updatedAt: "2022-06-08T08:55:47.085Z",
		name: "Hollis",
		email: "Lelah86@hotmail.com"
	}, {
		id: "65743061-3dda-41b6-9939-7a3c6e3df75e",
		createdAt: "2022-06-08T10:36:18.848Z",
		updatedAt: "2022-06-08T10:36:18.849Z",
		name: "John",
		email: "john@example.org"
	}, {
		id: "ffb49bb0-2d93-4be8-a8b9-5d7ec95e76ae",
		createdAt: "2022-06-08T10:38:16.494Z",
		updatedAt: "2022-06-08T10:38:16.495Z",
		name: "John",
		email: "foo@myine.com"
	}];

	try {
		res.setHeader('Content-Type', 'application/json')
		res.end(JSON.stringify(records));
	} catch (e) {
		console.error('users.json.js get:', e);
	}
}