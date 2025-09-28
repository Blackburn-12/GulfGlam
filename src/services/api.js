const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5100/api";

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Safely parse JSON; fall back to text when not JSON
  async safeParse(response) {
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      return await response.json();
    }
    const text = await response.text();
    try {
      return JSON.parse(text);
    } catch (_) {
      return { message: text };
    }
  }

  buildError(response, parsed) {
    const status = response.status;
    const msg =
      (parsed && (parsed.message || parsed.error)) || `HTTP ${status}`;
    const err = new Error(msg);
    err.status = status;
    err.details = parsed;
    return err;
  }

  // Helper method to get headers with auth token
  getHeaders() {
    const token = localStorage.getItem("adminToken");
    return {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };
  }

  // Auth endpoints
  async login(email, password) {
    const response = await fetch(`${this.baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }

  async signup(email, password, name) {
    const response = await fetch(`${this.baseURL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }

  // Product endpoints
  async getProducts() {
    const response = await fetch(`${this.baseURL}/products`);

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }

  async getProduct(id) {
    const response = await fetch(`${this.baseURL}/products/${id}`);

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }

  async createProduct(productData) {
    const response = await fetch(`${this.baseURL}/products`, {
      method: "POST",
      headers: this.getHeaders(),
      body: JSON.stringify(productData),
    });

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }

  async updateProduct(id, productData) {
    const response = await fetch(`${this.baseURL}/products/${id}`, {
      method: "PUT",
      headers: this.getHeaders(),
      body: JSON.stringify(productData),
    });

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }

  async deleteProduct(id) {
    const response = await fetch(`${this.baseURL}/products/${id}`, {
      method: "DELETE",
      headers: this.getHeaders(),
    });

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }

  // Upload image
  async uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(`${this.baseURL}/upload`, {
      method: "POST",
      headers: {
        ...(localStorage.getItem("adminToken") && {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        }),
      },
      body: formData,
    });

    const parsed = await this.safeParse(response);
    if (!response.ok) {
      throw this.buildError(response, parsed);
    }
    return parsed;
  }
}

export default new ApiService();
