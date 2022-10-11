import JWTVerify from '../Utils/Promises/JWTVerify'

const VerifyJWT = async (req, res, next) => {
	const token = req.headers['x-access-token']?.split(' ')[1]

	if (!token)
		return res.status(401).json({
			errors: ['Failed to authenticate'],
			data: {},
		})

	await JWTVerify(token, process.env.JWT_SECRET)
		.then(decoded => {
			const user = {
				id: decoded.id,
			}

			req.user = user

			next()
		})
		.catch(() => {
			return res.status(401).json({
				errors: ['Failed to authenticate'],
				data: {},
			})
		})
}

export default VerifyJWT
