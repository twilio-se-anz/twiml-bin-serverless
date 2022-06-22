const twilio_version = require('twilio/package.json').version;
const mustache = require('mustache');

exports.handler = function(context, event, callback) {

  console.log(`Entered ${context.PATH} node version ${process.version} twilio version ${twilio_version}`);

  let cors = require(Runtime.getFunctions()['utils/cors-response'].path);
  let twimlContent = Runtime.getAssets()[`/${event.template}.xml`].open();

  const output = mustache.render(twimlContent, event);
  console.log(`twimlContent: ${twimlContent} - ${output}`);
  callback(null, cors.response(output, 'application/xml'));
};