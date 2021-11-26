function accInt(func, time) {
    let nextAt = new Date().getTime() + time;
    let timeout;

    function wrapper() {
        nextAt += time;
        timeout = setTimeout(wrapper, nextAt - new Date().getTime());
        return func();
    }

    function cancel() {
        return clearTimeout(timeout);
    }

    timeout = setTimeout(wrapper, nextAt - new Date().getTime());

    return { cancel };
}