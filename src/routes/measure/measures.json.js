/**
 * This was my attempt at creating a local JSON snapshot.
 */
export function get(req, res, next) {
	var records = [{
		id: "16634df5-1f09-4c66-844f-8b5281d35210",
		createdAt: "2022-06-08T11:42:14.794Z",
		updatedAt: "2022-06-08T11:41:31.477Z",
		moodId: "32661bf9-6847-4046-8bce-c10f16aa8f3d",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}, {
		id: "98c2c0db-d649-4dd8-87df-1f0c8e718a45",
		createdAt: "2022-06-08T11:42:14.794Z",
		updatedAt: "2022-06-08T11:41:32.180Z",
		moodId: "05571b66-c14d-402e-8da1-71ccfb269a60",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}, {
		id: "6cdc4cf9-b964-48b3-ade0-894e9c2f0a99",
		createdAt: "2022-06-08T11:59:04.790Z",
		updatedAt: "2022-06-08T11:59:04.790Z",
		moodId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}, {
		id: "fb8d12e1-ce74-4404-bc79-8ad8a00f39e7",
		createdAt: "2022-06-08T11:59:09.322Z",
		updatedAt: "2022-06-08T11:59:09.323Z",
		moodId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de",
		userId: "07fc1e4d-9042-45ea-9d46-2e88a320d5de"
	}];
	try {
		res.setHeader('Content-Type', 'application/json')
		res.end(JSON.stringify(records));
	} catch (e) {
		console.error('measures.json.js get:', e);
	}
}