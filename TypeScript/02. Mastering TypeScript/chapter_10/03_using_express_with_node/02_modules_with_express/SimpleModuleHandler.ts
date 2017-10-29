export function processRequest(req, res) {
  console.log(`SimpleModuleHandler.processRequest`);
  res.send('<h1>Hello World, from ModuleHandler!</h1>');
}