## xyy-sdk 1.0.5

游戏方xyy-sdk使用

### 引入
```html
<!-- 注意xyy-sdk版本 如：xyy-sdk?1.0.1 -->
<script src="//static.xyimg.net/cn/static/h5/js/xyy-sdk.js?{x.y.z}"></script>
```
### API
#### createRole(uid, sid, role, roleId, job)
    uid:Number — 必须，用户id

    sid:Number — 必须，区服id

    role:String — 必须，角色名

    roleId:Number — 必须，角色id

    job:String — 不必须，职业

#### gamelogin(uid, gid, sid, roleid, rolename)
    uid:Number — 必须，用户id

    gid:Number — 必须，游戏id

    role:String — 必须，角色名

    roleid:Number — 不必须，角色id

    job:String — 不必须，职业

