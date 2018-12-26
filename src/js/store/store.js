const getState = scope => {
	return {
		store: {
			events: [],
			meetups: [],
			session: {}
		},
		actions: {
			convertTime: time => {
				let ampmsign = "AM";
				if (time.substring(0, 1) >= 12) {
					ampmsign = "PM";
				}
				return time.substring(0, 5) + " " + ampmsign;
			},

			convertDate: date => {
				let convertdate = "";
				convertdate =
					date.substring(6, 8) +
					"/" +
					date.substring(4, 6) +
					"/" +
					date.substring(0, 4);
				return convertdate;
			},

			getMeetupName: meetupID => {
				let store = scope.state.store;
				let meetup = store.meetups.filter(item => item.ID == meetupID);
				return meetup[0].post_title;
			}
		}
	};
};

export default getState;
