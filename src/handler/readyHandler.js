module.exports = {
    readyHandler() {
       console.log(`[${Date.now()}] Logged in as ${client.user.tag}`)
    }
}