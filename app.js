const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

// Sample in-memory food items
let foodItems = [
    { id: 1, name: 'Pizza', price: 10.99 },
    { id: 2, name: 'Burger', price: 5.99 },
    // Add more items as needed
];

app.use(bodyParser.json());

// API to get all food items
app.get('/api/foodItems', (req, res) => {
    res.json(foodItems);
});

// API to place an order
app.post('/api/placeOrder', (req, res) => {
    const { foodItemId, quantity } = req.body;
    const selectedFoodItem = foodItems.find(item => item.id === foodItemId);

    if (!selectedFoodItem) {
        res.status(404).json({ error: 'Food item not found' });
    } else {
        // In a real application, you would process the order here
        res.json({ message: 'Order placed successfully!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
