const createError = require('http-errors');

const {
    Apartment
} = require('../models');

// APIs
const getApartments = async (req, res, next) => {
    try {
        
    } catch (e) {
        next(createError(500, 'Unexpected error'));
    }
}

const getApartment = async (req, res, next) => {
    try {

    } catch (e) {
        next(createError(500, 'Unexpected error'));
    }
}

const createApartments = async (req, res, next) => {
    try {

    } catch (e) {
        next(createError(500, 'Unexpected error'));
    }
}

const renderApartment = async (req, res, next) => {
    try {

    } catch (e) {
        next(createError(500, 'Unexpected error'));
    }
}

const renderApartments = async (req, res, next) => {
    try {
        let {
            keyword
        } = req.query;

        if (req.isAuthenticated()) {
            return res.render('pages/apartments', { currentUser: req.user });
        }
        return res.render('pages/apartments');
    } catch (e) {
        next(createError(500, 'Unexpected error'));
    }
}

module.exports = {
    getApartments,
    createApartments,
    renderApartments,
    renderApartment
}