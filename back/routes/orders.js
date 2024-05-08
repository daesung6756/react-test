const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

// 모든 주문 가져오기
router.get('/', ordersController.getAllOrders);

// 특정 주문 가져오기
router.get('/:id', ordersController.getOrderById);

// 새로운 주문 추가
router.post('/', ordersController.createOrder);

// 특정 주문 업데이트
router.put('/:id', ordersController.updateOrder);

// 특정 주문 삭제
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;