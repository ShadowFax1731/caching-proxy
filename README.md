# Caching Proxy

A command-line tool that starts a caching proxy server to improve performance by caching HTTP responses and reducing redundant requests to origin servers.

## Overview

This caching proxy server acts as an intermediary between clients and origin servers. It forwards incoming requests to the target server and caches the responses. When the same request is made again, it returns the cached response instead of forwarding the request to the origin server, significantly reducing response times and server load.

## Features

- **HTTP Request Forwarding**: Seamlessly forwards client requests to the target server
- **Response Caching**: Intelligently caches server responses to avoid redundant requests
- **Cache Hit/Miss Tracking**: Monitors cache performance with detailed statistics
- **Command-Line Interface**: Easy-to-use CLI for starting and configuring the proxy
- **Configurable Port**: Run the proxy on any available port
- **Real-time Logging**: Monitor requests, responses, and cache operations

## Installation

```bash
# Clone the repository
git clone https://github.com/ShadowFax1731/caching-proxy.git
cd caching-proxy

# Install dependencies (if using Node.js)
npm install


## Usage

### Basic Usage

Start the caching proxy server:

```bash
# Default usage (listens on port 3000)
caching-proxy --port 3000 --origin http://dummyjson.com


### Command Line Options

```bash
caching-proxy [OPTIONS]

Options:
  --port, -p          Port number for the proxy server (default: 3000)
  --origin, -o        Origin server URL to proxy requests to
  --clear-cache       Clear all cached responses
```

### Examples

1. **Start proxy on custom port:**
   ```bash
   caching-proxy --port 8080 --origin https://jsonplaceholder.typicode.com
   ```

2. **Clear cache before starting:**
   ```bash
   caching-proxy --port 3000 --origin http://dummyjson.com --clear-cache
   ```

3. **Test the proxy:**
   ```bash
   # Start the proxy
   caching-proxy --port 3000 --origin http://dummyjson.com

   # Make requests through the proxy
   curl http://localhost:3000/products/1
   curl http://localhost:3000/products/1  # This should be served from cache
   ```

## How It Works

1. **First Request**: Client → Proxy → Origin Server → Proxy → Client
   - Request is forwarded to the origin server
   - Response is cached and returned to client
   - Headers indicate cache miss

2. **Subsequent Identical Requests**: Client → Proxy → Client
   - Response is served directly from cache
   - No request made to origin server
   - Headers indicate cache hit

## Cache Behavior

- **Cache Key**: Requests are cached based on the full URL and HTTP method
- **Cache Storage**: Responses are stored in memory during the proxy session
- **Cache Headers**:
  - `X-Cache: HIT` - Response served from cache
  - `X-Cache: MISS` - Response fetched from origin server
- **Cache Invalidation**: Cache is cleared when the proxy restarts or using `--clear-cache`

## Response Headers

The proxy adds custom headers to help with debugging and monitoring:

```http
X-Cache: HIT                    # or MISS


## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built as part of the [roadmap.sh](https://roadmap.sh) backend development challenges

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/ShadowFax1731/caching-proxy/issues) page
2. Create a new issue with detailed information
3. Include logs and configuration details for faster resolution
