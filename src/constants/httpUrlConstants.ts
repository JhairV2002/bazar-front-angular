export const url = 'http://localhost:8080';
// --- brands ---
export const brandsBaseUrl: string = `${url}/brands`;
export const getAllBrandsUrl: string = `${brandsBaseUrl}/list-all/`;
export const getBrandsWithProducts: string = `${brandsBaseUrl}/list-with-products/`;
export const getBrandsWithProductsCant: string = `${brandsBaseUrl}/list-with-products-cant/`;
export const createBrandUrl: string = `${brandsBaseUrl}/create/`;
export const getBrandByIdUrl = (id: number): string =>
  `${brandsBaseUrl}/list-by-id/${id}`;
export const updateBrandUrl = (id: number): string =>
  `${brandsBaseUrl}/update/${id}`;
export const deleteBrandUrl = (id: number): string =>
  `${brandsBaseUrl}/delete/${id}`;

// --- products ---

export const productsBaseUrl: string = `${url}/products`;
export const getAllProductsUrl: string = `${productsBaseUrl}/list-all/`;
export const createProductUrl: string = `${productsBaseUrl}/create/`;
export const getProductByIdUrl = (id: number): string =>
  `${productsBaseUrl}/list-by-id/${id}`;
export const updateProductUrl = (id: number): string =>
  `${productsBaseUrl}/update/${id}`;

// -- promos --

export const promosBaseUrl: string = `${url}/promos`;
export const getAllPromosUrl: string = `${promosBaseUrl}/get-all`;

// -- bills --
export const billsBaseUrl: string = `${url}/bills`;
export const createBillUrl: string = `${billsBaseUrl}/create/`;
export const getBillsUrl: string = `${billsBaseUrl}/get-all/`;

// ---- Authentication ----

export const authenticationUrl: string = `${url}/auth/login`;

// ---------------

export const token: string =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJRdWludGVuX1NjaGFkZW5AaG90bWFpbC5jb20iLCJuYmYiOjE3MTg1MDUyNTcsImlzcyI6IkFVVEgwSldULUJBQ0tFTkQiLCJleHAiOjE3MTg1OTE1NTIsImlhdCI6MTcxODUwNTI1NywiYXV0aG9yaXRpZXMiOiJST0xFX0FETUlOLENSRUFURSIsImp0aSI6IjVkYmQyNmEzLTlmNjEtNDI5Ni05Mzg0LTU1YTJjYmI0YWE5NSJ9.L_kRGwbWbSA_s9ZXKYU2fiigaQfHmEtKOxavnBAd4Wc';
