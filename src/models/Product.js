export default class Product {
  constructor(db) {
    this.db = db;
    this.collectionName = "products";
    this.collection = db.collection(this.collectionName);
  }

  /**
   * Find a specific product document by ID
   * @param {ObjectID} productId
   */
  findById(productId) {
    return this.collection.findOne({ _id: productId });
  }
}
