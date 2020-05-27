const config = {
	env: "dev",
	// #ifndef H5
	apiBaseUrl: 'http://192.168.1.100:4000',
	// #endif

	// #ifdef H5
	apiBaseUrl: "/api",
	// #endif

	wsUrl: "ws://192.168.1.100:4000/ws",
}

export {
	config
}
