const Contact = require("../models/Contact");

const all = async (user, filter = '') => {
    let filterData = { user }

    if (!user.isAdmin) {
        filterData = { user }
    }

    if (filter) {
        filterData = {
            ...filterData,
            name: {
                $regex: `.*${filter}.*`,
                $options: 'i'
            }
        }
    }
    return Contact.find(filterData).lean();
}

const byId = async (id) => Contact.findById(id).lean();

const create = async (name, email, phone) => {
    return Contact.create({
        name,
        email,
        phone,
        user: _userid
    });
}

const update = async (id, name, email, phone) => {
    return Contact.findByIdAndUpdate(id, {
        $set: { name, email, phone }
    });
};

const remove = async (id) => Contact.findByIdAndDelete(id);

module.exports = { all, byId, create, update, remove };