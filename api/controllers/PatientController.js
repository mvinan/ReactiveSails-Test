/**
 * PatientController
 *
 * @description :: Server-side logic for managing patients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res, next){
		var userObj = {
			name : req.param('name'),
			lastName: req.param('lastName'),
			email: req.param('email')
		}
		Patient.create(userObj, function(err, user){
			if (err) {
				return next(err)
			}
			return res.ok({
				name: user.name,
				lastName:user.lastName,
				email: user.email
			})
		})
	}
};
