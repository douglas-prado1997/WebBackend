const connection = require('./connection');

const createPost = async (post) => {
    const { name, description, ingredients, value, image, id_responsible } = post;

    try {
        const query = `
            INSERT INTO post (name, description, ingredients, value, image, id_responsible)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        
        const [result] = await connection.execute(query, [name, description, ingredients, value, image, id_responsible]);

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
    const [post] = await connection.execute(
        "SELECT p.id,p.name, description, CONVERT(image USING utf8) AS image, " +
        "value, u.name as responsible  FROM post p " + 
        "INNER JOIN users u ON (u.id = p.id_responsible);"
      );
      
    return post || []
};

const likePost = async (like) => {
    const { id_post, id_user } = like;

    try {
        const query = `
            INSERT INTO like_post (id_post, id_responsible)
            VALUES (?,?)
        `;
        
        const [result] = await connection.execute(query, [id_post, id_user]);

        if (result.affectedRows === 1) {
            return { success: true, postId: result.insertId };
        } else {
            return { success: false, error: "Falha ao inserir post." };
        }
    } catch (error) {
        console.error("Erro ao inserir like:", error);
        return { success: false, error: "Erro ao inserir post. Por favor, tente novamente mais tarde." };
    }
};

module.exports = {
    createPost,
    getPost,
    likePost
};
