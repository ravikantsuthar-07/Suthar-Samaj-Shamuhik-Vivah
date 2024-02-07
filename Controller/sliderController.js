import SliderModel from "../Models/sliderModel.js";

export const getSliderController = async (req, res) => {
    try {
        const slider = await SliderModel.find({}).sort({ createdAt: -1 });
        return res.status(200).send({
            success: true,
            message: "Getting All Slider",
            slider
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in Getting Sliders",
            error
        });
    }
};

export const createSliderController = async (req, res) => {
    try {
        const { img } = req.files;
        const { year } = req.fields;
        
        return res.status(200).send({
            success: true,
            message: "Create A Slider Successfully",
            slider
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error in Creating Sliders",
            error
        });
    }
};