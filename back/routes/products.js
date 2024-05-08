const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// 모든 제품 가져오기
router.get('/', productsController.getAllProducts);

// 특정 제품 가져오기
router.get('/:id', productsController.getProductById);

// 새로운 제품 추가
router.post('/', productsController.createProduct);

// 특정 제품 업데이트
router.put('/:id', productsController.updateProduct);

// 특정 제품 삭제
router.delete('/:id', productsController.deleteProduct);

module.exports = router;