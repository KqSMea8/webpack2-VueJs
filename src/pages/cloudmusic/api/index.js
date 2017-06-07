const _baseUrl = 'http://musicapi.duapp.com/api.php'
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/'
export default {
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit
  },
  getLrc (id) {
    return _baseUrl2 + '?type=lyric&id=' + id
  },

  getSong (id) {
    return _baseUrl + '?type=url&id=' + id
  },
  /* getSong
  {
   "data": [
   {
   "id": 276152,
   "url": "http://m8.music.126.net/20170531155106/5aade8bdfb4a535bf90159043892dc26/ymusic/61af/40e6/be73/4b38101776aba2309dbc9868ef45318a.mp3",
   "br": 320000,
   "size": 10780307,
   "md5": "4b38101776aba2309dbc9868ef45318a",
   "code": 200,
   "expi": 1200,
   "type": "mp3",
   "gain": 0.6441,
   "fee": 0,
   "uf": null,
   "payed": 0,
   "flag": 0,
   "canExtend": false
   }
   ],
   "code": 200
  }
   */
  getPlayListDetail (id) {
    return _baseUrl2 + '?type=playlist&id=' + id
  },
  getMv (id) {
    return _baseUrl2 + '?type=mv&id=' + id
  },
  search (words) {
    return _baseUrl2 + '?type=search&s=' + words
  }
}
