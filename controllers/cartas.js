const Cartas = require('../models/cartas');

exports.GetMazo = async (req, res, next) => {
    try {
        const mazo = await Cartas.find({});
        return res.status(200).json({
            sucess: true,
            count: mazo.length,
            data: mazo
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.CreateCarta = async (req, res, next) => {
    try {
        const carta = new Cartas(req.body);
        console.log(req.body);
        await carta.save();

        return res.status(201).json({
            sucess: true,
            data: carta
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

exports.DeleteCarta = async (req, res, next) => {
    try {
        const carta = await Cartas.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: true
        })
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            error: 'server error'
        })
    }
}