define([
	'core'
], function (core) {

	/**
	 * Function to be used for all main logging
	 * @param {string} message       The message to log
	 * @param {string} [logType]     A log type that is defined in mv.enums.logTypes
	 * @param {Object} [objectToLog] An actual object that can be logged
	 * @return {Object}              An object used to confirm actions, used in unit tests
	 */
	mv.log = function (message, logType, objectToLog) {
		var message,
			type = determineType(logType);

		return {
			type: type,
			addedToLog: addToLog(message, type, objectToLog),
			persisting: persistLog(message, type, objectToLog)
		};
	};

	/**
	 * This function determines or defaults the type of message being logged
	 * @param  {string} logType A log type that is defined in mv.enums.logTypes
	 * @return {string}         The type of logged derived
	 */
	var determineType = function (logType) {
		var type;

		switch (logType) {

		case mv.enums.logTypes.ERROR:
		case mv.enums.logTypes.WARN:
		case mv.enums.logTypes.INFO:
			type = logType;
			break;

		default:
			type = mv.enums.logTypes.INFO;
			break;
		}

		return type;
	};

	/**
	 * This determines, based on environment and log type, if a message should be logged to the console
	 * @param {string} message     The message to log
	 * @param {string} logType     A log type that is defined in mv.enums.logTypes
	 * @param {Object} objectToLog An actual object that can be logged
	 * @return {boolean}           Was is added to the log?
	 */
	var addToLog = function (message, logType, objectToLog) {
		var addedToLog = false;

		if (_.indexOf(mv.env.logTypesToLog, logType) > -1) {

			var msg = logType.toUpperCase() + ': ' + message;

			if (objectToLog === undefined) {
				console.log(msg);
			} else {
				console.log(msg, objectToLog);
			}
			addedToLog = true;
		}
		return addedToLog;
	};

	/**
	 * This determines, based on environment and log type, if a message should be persisted
	 * @param {string} message     The message to log
	 * @param {string} logType     A log type that is defined in mv.enums.logTypes
	 * @param {Object} objectToLog An actual object that can be logged/stringified
	 * @return {boolean}           Will it persist?
	 */
	var persistLog = function (message, logType, objectToLog) {
		var persisting = false;

		if (_.indexOf(mv.env.logTypesToPersist, logType) > -1) {

			var logData = {
				type: logType.toUpperCase(),
				message: message
			};

			if (objectToLog !== undefined) {
				logData.obj = objectToString(objectToLog);
			}

			$.ajax({
				type: 'POST',
				url: mv.urls.logging,
				data: logData
			}).done(function () {

			}).fail(function (error) {
				console.log('failed to persist error', error);
			});
			persisting = true;
		}
		return persisting;
	};

	/**
	 * Turn the object into a string
	 * @param  {Object} objectToLog A literal or JS error object
	 * @return {string}             A stringified result of the provided object
	 */
	var objectToString = function (objectToLog) {
		var str = '',
			toStr;

		if (objectToLog !== undefined && typeof (objectToLog) === 'object') {
			toStr = objectToLog.toString();
			str = (toStr === '[object Object]') ? JSON.stringify(objectToLog) : toStr;
		}
		return str;
	};

});
