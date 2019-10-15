import Axios from 'axios'
export function request(config) {
	const instance = Axios.create({
		baseURL: 'http://www.testdiy.com/api/public',
		timeout: 5000
	})
	instance.interceptors.request.use(
		config => {
			console.log(config)
			return config
		},
		err => {
			console.log(err)
		}
	)
	instance.interceptors.response.use(
		res => {
			return res.data
		},
		err => {
			console.log(err)
		}
	)
	return instance(config)
}
