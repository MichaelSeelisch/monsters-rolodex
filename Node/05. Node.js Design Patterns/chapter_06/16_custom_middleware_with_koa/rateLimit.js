const lastCall = new Map();

module.exports = function *(next) {
    // Inbound
    const now = new Date();

    if (lastCall.has(this.ip) && now.getTime() - lastCall.get(this.ip).getTime() < 1000) {
        return this.status = 429; // Too Many Requests
    }

    yield next;

    // Outbound
    lastCall.set(this.ip, now);
    this.set('X-RateLimit-Reset', now.getTime() + 1000);
};
