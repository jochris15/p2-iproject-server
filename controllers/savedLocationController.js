const { PopularLocation, SavedLocation, User } = require('../models')

class SavedLocationController {
    static async createSavedLocation(req, res, next) {
        try {
            let location = req.body.name
            let [saved, created] = await SavedLocation.findOrCreate({
                where: { name: location },
                where: { name: location, UserId: +req.user.id },
                defaults: {
                    name: location,
                    UserId: +req.user.id
                }
            })

            if (!created) throw { name: 'already_saved' }

            res.status(201).json({
                message: 'Success saved new location',
                saved
            })
        } catch (error) {
            next(error)
        }
    }

    static async readSavedLocation(req, res, next) {
        try {
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SavedLocationController