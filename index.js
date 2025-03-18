addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    // Block all incoming traffic
    return new Response('Access blocked', { status: 403 })
}