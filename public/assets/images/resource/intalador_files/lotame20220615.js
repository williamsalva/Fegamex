(function() {
	! function() {
		var lotameClientId = '15238';
		var lotameTagInput = {
			data: {},
			config: {
				clientId: Number(lotameClientId)
			}
		};

		var lotameConfig = lotameTagInput.config || {};
		var namespace = window['lotame_' + lotameConfig.clientId] = {};
		namespace.config = lotameConfig;
		namespace.data = lotameTagInput.data || {};
		namespace.cmd = namespace.cmd || [];
	} ();

	var s = document.createElement("script");
	s.src = "https://tags.crwdcntrl.net/lt/c/15238/lt.min.js";
	s.async = "async";
	document.body.appendChild(s);

})();
