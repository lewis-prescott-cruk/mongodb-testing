import TestDbHelper from "../testUtils/testDbHelper";
import Product from "./Product";

const dbHelper = new TestDbHelper();

beforeAll(async () => {
  await dbHelper.start();
});

afterAll(async () => {
  await dbHelper.stop();
});

let product;
beforeEach(async () => {
  product = new Product(dbHelper.db);
});

afterEach(async () => {
  await dbHelper.cleanup();
});

describe("findById", () => {
  test("should return the correct document by ID", async () => {
    // 1. Insert the desired documents and collections into the database
    const { product2 } = await createSampleProducts();

    // 2. Call the method under test with the parameters needed for the desired outcome
    const result = await product.findById(product2._id);

    // 3. Make assertions on the result
    expect(result).toMatchObject(product2);
  });

  test("should return null if a document with the provided ID could not be found", async () => {
  });
});

describe("findByIds", () => {
  test("should return the correct documents by ID", async () => {
  });

  test("should return empty array if documents with the provided IDs could not be found", async () => {
  });
});

describe("findByBrand", () => {
  test("should return matching documents with no sort", async () => {
  });

  test("should return matching documents with custom sort", async () => {
  });

  test("should return empty array if there are no matches", async () => {
  });
});

describe("serialize", () => {
  test("should return correct shape", async () => {
  });

  test("should return the correct SKU", async () => {
  });

  test("should return the correct discount if msrp is higher than sale price", async () => {
  });

  test("should return a zero discount if msrp is lower than sale price", async () => {
  });

  test("should return a zero discount if msrp is not set", async () => {
  });

  test("should return the correct related products", async () => {
  });

  test("should return an empty array if there are no related products", async () => {
  });
});

/**
 * Insert set of sample products into the database
 */
async function createSampleProducts() {
  const product1 = await dbHelper.createDoc(product.collectionName, {
    name: "PLUS Sewing Quilting Machine",
    modelNum: "B880",
    brand: "Bernina",
    salePrice: 349.99,
    msrp: 329.99,
    relatedProducts: []
  });
  const product2 = await dbHelper.createDoc(product.collectionName, {
    name: "Mechanical Sewing Machine with Foot Pedal",
    modelNum: "10",
    brand: "Alphasew",
    salePrice: 79.99,
    relatedProducts: []
  });
  const product3 = await dbHelper.createDoc(product.collectionName, {
    name: "L460 Overlocker",
    modelNum: "L460",
    brand: "Bernina",
    salePrice: 189.99,
    relatedProducts: []
  });
  const product4 = await dbHelper.createDoc(product.collectionName, {
    name: "Sewing & Embroidery Machine",
    modelNum: "NQ3600D",
    brand: "Brother",
    salePrice: 219.99,
    msrp: 249.99,
    relatedProducts: [product1._id, product3._id]
  });

  return { product1, product2, product3, product4 };
}
