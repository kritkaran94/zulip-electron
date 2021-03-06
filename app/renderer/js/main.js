		window.onload = function getURL() {

			const JsonDB = require('node-json-db');
			const dialogs = require('dialogs')()
		    const db = new JsonDB("domain", true, true);
		    const data = db.getData("/");

		    if (data["domain"] !== undefined) {
		        window.location.href = 'https://' + data["domain"];
		    } else {
		        dialogs.prompt('Enter the URL for your Zulip server', function(url) {
		        	newurl = url.replace(/^https?:\/\//,'')
		            db.push("/domain", newurl);
		            window.location.href = 'https://' + newurl ;
		        })
		    }

		const addPlaceHolder = document.getElementsByTagName('input')[0];
		addPlaceHolder.setAttribute('placeholder', 'zulip.example.com');
		}