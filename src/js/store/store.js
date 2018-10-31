const getState = scope => {
	return {
		store: {
			data: []
		},
		actions: {
			changeColor: (element, color) => {
				let store = scope.state.store;
				scope.setState({ store });
			}
		}
	};
};

export default getState;
