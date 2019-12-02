var logger = require('../utils/logging')

module.exports = profile => {
    logger.log2('debug', 'profile=\n' + JSON.stringify(profile))
    return {
        uid: profile.user_id || profile.id,
        picture: profile.avatar,
        nickname: profile.nick_name,
        gender: profile.gender,
        st: profile.province,
        l: profile.city
    };
};

// Example:
// profile =
// {
//     "avatar": "https://tfs.alipayobjects.com/images/partner/T1jXpXXkVcXXXXXXXX",
//     "city": "北京市",
//     "gender": "m",
//     "is_certified": "T",
//     "is_student_certified": "F",
//     "nick_name": "杰克",
//     "province": "北京",
//     "user_id": "2088002952377827",
//     "user_status": "T",
//     "user_type": "2",
//     "id": "2088002952377827"
// }
