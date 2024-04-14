const connection = require('./connection');

const createPost = async (post) => {
    const { name, description, ingredients, value, image, id_responsible } = post;

    try {
        const query = `
            INSERT INTO post (name, description, ingredients, value, image, id_responsible)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        const [result] = await connection.execute(query, [name, description, ingredients, value, image, 1]);

        if (result.affectedRows === 1) {
            return { success: true, postId: result.insertId };
        } else {
            return { success: false, error: "Falha ao inserir post." };
        }
    } catch (error) {
        console.error("Erro ao inserir post:", error);
        return { success: false, error: "Erro ao inserir post. Por favor, tente novamente mais tarde." };
    }
};

const getPost = async () => {
    const [post] = await connection.execute('select * from post')
    return post || []
};

module.exports = {
    createPost,
    getPost
};
