# Caching Proxy

A high-performance command-line tool that creates a caching proxy server to improve application performance by caching HTTP responses and reducing redundant requests to origin servers.

## 📖 Overview

This caching proxy server acts as an intelligent intermediary between clients and origin servers. It forwards incoming requests to the target server and caches the responses for improved performance.

**How it works:**

- **First request**: Forwarded to the origin server, cached, and returned to client
- **Subsequent requests**: Served directly from cache for faster response times

This approach significantly reduces response times and server load.

## ✨ Features

- **🔄 HTTP Request Forwarding** – Seamlessly forwards client requests to the target server
- **💾 Response Caching** – Intelligently caches server responses to avoid redundant requests
- **📊 Cache Hit/Miss Tracking** – Monitors cache performance with detailed statistics
- **⚡ Command-Line Interface** – Easy-to-use CLI for starting and configuring the proxy
- **🔧 Configurable Port** – Run the proxy on any available port
- **📝 Real-time Logging** – Monitor requests, responses, and cache operations

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/ShadowFax1731/caching-proxy.git
cd caching-proxy

# Install dependencies
npm install
```

## 🚀 Usage

### Basic Usage

Start the caching proxy server:

```bash
# Default usage (listens on port 3000)
caching-proxy --port 3000 --origin http://dummyjson.com
```

### Command Line Options

```bash
caching-proxy [OPTIONS]

Options:
  --port, -p       Port number for the proxy server (default: 3000)
  --origin, -o     Origin server URL to proxy requests to
  --clear-cache    Clear all cached responses before starting
```

### Examples

**1. Start proxy on a custom port**

```bash
caching-proxy --port 8080 --origin https://jsonplaceholder.typicode.com
```

**2. Clear cache before starting**

```bash
caching-proxy --port 3000 --origin http://dummyjson.com --clear-cache
```

**3. Test the proxy**

```bash
# Start the proxy
caching-proxy --port 3000 --origin http://dummyjson.com

# Make requests through the proxy
curl http://localhost:3000/products/1
curl http://localhost:3000/products/1   # This should be served from cache
```

## 🔎 How It Works

### First Request Flow

```
Client → Proxy → Origin Server → Proxy → Client
```

- Response is cached and returned
- Headers show `X-Cache: MISS`

### Subsequent Identical Requests

```
Client → Proxy → Client
```

- Response served directly from cache
- Headers show `X-Cache: HIT`

## 🗂️ Cache Behavior

- **Cache Key**: Based on full URL + HTTP method
- **Cache Storage**: In-memory (cleared when proxy restarts)
- **Cache Headers**:
  - `X-Cache: HIT` → response served from cache
  - `X-Cache: MISS` → response fetched from origin
- **Cache Invalidation**: Use `--clear-cache` flag or restart the proxy

## 📨 Response Headers

The proxy adds custom headers for debugging and monitoring:

```http
X-Cache: HIT    # or MISS
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgments

- Built as part of the [roadmap.sh](https://roadmap.sh) backend development challenges

## 🛠️ Support

If you encounter issues or have questions:

1. Check the [Issues](https://github.com/ShadowFax1731/caching-proxy/issues) page
2. Open a new issue with detailed information
3. Include logs and configuration details for faster resolution

---

**Made with ❤️ for the developer community**
