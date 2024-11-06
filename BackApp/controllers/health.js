const sequelize = require("../util/database");

//readiness
exports.getReadiness = async (req, res, next) => {
	try {
		// Vérifie la connexion à la base de données
		await sequelize.authenticate();
		res.status(200).json({ status: "ready" });
	} catch (error) {
		console.error("Erreur de readiness:", error.message);
		res.status(500).json({ status: "not ready", error: error.message });
	}
};

//liveness
exports.getLiveness = (req, res, next) => {
	res.status(200).json({ status: "live" });
};
