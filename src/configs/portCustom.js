const find = require("find-process");
let previousPort = null;

async function killPort(port) {
    if (!port) return;
    try {
        const list = await find('port', port);
        if (list.length > 0) {
            console.log(`🔴 Đang đóng process cũ trên port ${port}...`);
            list.forEach(proc => process.kill(proc.pid, 'SIGTERM'));
            console.log(`✅ Đã đóng process cũ trên port ${port}.`);
        }
    } catch (error) {
        console.log(`⚠️ Không tìm thấy process nào trên port ${port}.`);
    }
}

async function startServer(app) {
    let portCustom = Math.floor(Math.random() * (9999 - 3000 + 1)) + 3000;

    await killPort(previousPort);

    previousPort = portCustom;

    app.listen(portCustom, () => {
        console.log(`🚀 Server đang chạy tại http://localhost:${portCustom}`);
    });
}

module.exports = {startServer}