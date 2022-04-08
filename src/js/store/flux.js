const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: []
		},
		actions: {
			getData: () => {
				  fetch("https://assets.breatheco.de/apis/fake/todos/user/marcelocalves", {
					method: 'GET',
					redirect: 'follow'
				  })
					.then(response => response.json())
					.then(result => setStore({list:result}))
					.catch(error => console.log('error', error));
			},
			updateList: (list) => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/marcelocalves", {
					method: 'PUT',
					headers: {
						"Content-Type":"application/json"
					},
					body:JSON.stringify(list),
					redirect: 'follow'
				  })
					.then(response => response.status === 200 ? getActions().getData(): "")
					.catch(error => console.log('error', error));
			},
			taskDone: (index) => {
				let list = getStore().list
				list[index].done = !list[index].done
				getActions().updateList(list)
			}
		}
	};
};

export default getState;
