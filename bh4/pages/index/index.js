//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    toView: "map",
    mapInfo: "第一章",
    mapName: "1-2转移伤患",
    peopleType: "手枪HG",
    peopleName: "柯尔特左轮",
    skillPrecision: 1,
    skillCriticalPossibility: 2,
    skillTime: 3,
    skillLove: 4,
    elfPower: 1,
    elfPrecision: 2,
    elfCriticalPossibility: 3,
    elfCriticalPower: 4,
    elfSkill: 5,
    haloPower: 1,
    haloPrecision: 2,
    haloCriticalPossibility: 3,
    skillNow: "其他",
    skill: ["猎杀冲动", "连珠终结", "其他"],
    chainBoxNow: {
      name: "IOP大容量弹链箱",
      cover: "...",
      power: 1,
      precision: 2,
      pierce: 3,
      criticalPossibility: 4,
      criticalPower: 5,
      chain: 6
    },
    armorPiercingBulletNow: {
      name: "M61穿甲弹",
      cover: "...",
      power: 1,
      precision: 2,
      pierce: 3,
      criticalPossibility: 4,
      criticalPower: 5,
      chain: 6666666
    },
    telescopicNow: [],
    telescopicRadioValueNow: "redPoint", 
    telescopicTypeSelected: [],
    telescopicSelected: [],
    telescopicSelected123: [],
    mainBgUrl: "https://i.loli.net/2018/09/27/5bacdfffeea64.png",
    leftBgUrl: "https://i.loli.net/2018/09/27/5bacdff80a2b9.png",
    mapNow: {
      name: "1-2转移伤患",
      info: "第一章",
      enemy: [
        {
          id: 1,
          hp: 62,
          dodge: 0,
          armor: 0
        },
        {
          id: 2,
          hp: 45,
          dodge: 3,
          armor: 6
        },
        {
          id: 3,
          hp: 62,
          dodge: 5,
          armor: 7
        },
        {
          id: 4,
          hp: 94,
          dodge: 42,
          armor: 3
        },
        {
          id: 5,
          hp: 82,
          dodge: 3,
          armor: 87
        },
        {
          id: 6,
          hp: 22,
          dodge: 93,
          armor: 83
        },
      ]
    },
    mapInfoArray: [],
    mapFiltedArray: [],
    peopleTypeArray: [],
    peopleFiltedArray: [],
    map: [
      {
        name: "1-2转移伤患",
        info: "第一章",
        enemy: [
          {
            id: 1,
            hp: 62,
            dodge: 0,
            armor: 0
          },
          {
            id: 2,
            hp: 45,
            dodge: 3,
            armor: 6
          },
          {
            id: 3,
            hp: 62,
            dodge: 5,
            armor: 7
          },
          {
            id: 4,
            hp: 94,
            dodge: 42,
            armor: 3
          },
          {
            id: 5,
            hp: 82,
            dodge: 3,
            armor: 87
          },
          {
            id: 6,
            hp: 22,
            dodge: 93,
            armor: 83
          },
        ]
      },
      {
        name: "2-3N 专业帮手 III",
        info: "第二章",
        enemy: [
          {
            id: 1,
            hp: 62,
            dodge: 0,
            armor: 0
          },
          {
            id: 2,
            hp: 45,
            dodge: 3,
            armor: 6
          },
          {
            id: 3,
            hp: 62,
            dodge: 5,
            armor: 7
          },
          {
            id: 4,
            hp: 94,
            dodge: 42,
            armor: 3
          }
        ]
      },
      {
        name: "1-3转移",
        info: "第一章",
        enemy: [
          {
            id: 1,
            hp: 62,
            dodge: 0,
            armor: 0
          }
        ]
      },
      {
        name: "2-5F 专业 III",
        info: "第二章",
        enemy: [
          {
            id: 1,
            hp: 62,
            dodge: 0,
            armor: 0
          }
        ]
      }
    ],
    peopleNow: {
      name: "柯尔特左轮",
      type: "手枪HG",
      cover: "...",
      attack: 36,
      piercingArmor: 49,
      armourPiercing: 10,
      violentAttack: 20,
      detonatingInjury: 50,
      belt: 0
    },
    people: [
      {
        name: "柯尔特左轮",
        type: "手枪HG",
        cover: "...",
        attack: 36,
        piercingArmor: 49,
        armourPiercing: 10,
        violentAttack: 20,
        detonatingInjury: 50,
        belt: 0
      },
      {
        name: "柯尔特右轮",
        type: "机枪",
        cover: "...",
        attack: 36,
        piercingArmor: 4,
        armourPiercing: 7,
        violentAttack: 2,
        detonatingInjury: 5,
        belt: 45
      },
      {
        name: "柯尔特",
        type: "手枪HG",
        cover: "...",
        attack: 6,
        piercingArmor: 9,
        armourPiercing: 0,
        violentAttack: 0,
        detonatingInjury: 0,
        belt: 0
      }
    ],
    chainBox: [
      {
        name: "IOP大容量弹链箱",
        cover: "...",
        power: 1,
        precision: 2,
        pierce: 3,
        criticalPossibility: 4,
        criticalPower: 5,
        chain: 6
      },
      {
        name: "IO",
        cover: "...",
        power: 1,
        precision: 2333333,
        pierce: 3,
        criticalPossibility: 4,
        criticalPower: 5,
        chain: 6
      },
      {
        name: "大容量弹链箱",
        cover: "...",
        power: 1,
        precision: 2,
        pierce: 3,
        criticalPossibility: 4,
        criticalPower: 5,
        chain: 6666666
      }
    ],
    armorPiercingBullet: [
      {
        name: "穿甲弹1",
        cover: "...",
        power: 1,
        precision: 2,
        pierce: 3,
        criticalPossibility: 4,
        criticalPower: 5,
        chain: 6
      },
      {
        name: "穿甲弹2",
        cover: "...",
        power: 1,
        precision: 2333333,
        pierce: 3,
        criticalPossibility: 4,
        criticalPower: 5,
        chain: 6
      },
      {
        name: "穿甲弹3",
        cover: "...",
        power: 1,
        precision: 2,
        pierce: 3,
        criticalPossibility: 4,
        criticalPower: 5,
        chain: 6666666
      }
    ],
    telescopic: {
      redPoint: [
        {
          name: "红点1",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "红点2",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "红点3",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "红点4",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        }
      ],
      holographic: [
        {
          name: "全息1",
          cover: "...",
          power: 100,
          precision: 2,
          pierce: 3,
          criticalPossibility: 400,
          criticalPower: 500,
          chain: 6666666
        },
        {
          name: "全息2",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "全息3",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "全息4",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        }
      ],
      optics: [
        {
          name: "光学1",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "光学2",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "光学3",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        },
        {
          name: "光学4",
          cover: "...",
          power: 1,
          precision: 2,
          pierce: 3,
          criticalPossibility: 4,
          criticalPower: 5,
          chain: 6666666
        }
      ]
    }
  },
  // 处理本页内跳转逻辑
  toMap: function(e) {
    this.setData({
      toView: "map"
    })
  },
  toPeople: function (e) {
    this.setData({
      toView: "people"
    })
  },
  toElf: function (e) {
    this.setData({
      toView: "elf"
    })
  },
  toHalo: function (e) {
    this.setData({
      toView: "halo"
    })
  },
  toEquipment: function (e) {
    this.setData({
      toView: "equipment"
    })
  },
  toMiaoju: function (e) {
    this.setData({
      toView: "miaoju"
    })
  },
  submit: function(e) {
    let that = this
    let tmp = []
    this.data.telescopicSelected.forEach(element => {
      tmp.push(element)
    });
    let defaultData = {
      id: "",
      name: "",
      cover: "",
      power: 0,
      precision: 0,
      pierce: 0,
      criticalPossibility: 0,
      criticalPower: 0,
      chain: 0
    }
    // 如果不够三个，则再添加一些
    let length = tmp.length
    if (length < 3) {   
      for (let i = 0; i < 3 - length; i++) {
        tmp.push(defaultData)
      }
    }
    this.setData({
      telescopicSelected123: tmp
    })
    wx.request({
      url: 'http://www.gamepaper.cn/api/GfSelectSight/GfSelectSight',
      data: {
        mapId: 1,
        dollPower: this.data.peopleNow.attack,
        dollPrecision: this.data.peopleNow.piercingArmor,
        dollPierce: this.data.peopleNow.armourPiercing,
        dollCriticalPossibility: this.data.peopleNow.violentAttack,
        dollCriticalPower: this.data.peopleNow.detonatingInjury,
        dollChain: this.data.peopleNow.belt,
        skillType: this.data.skillNow,
        skillParameter1: this.data.skillPrecision,
        skillParameter2: this.data.skillCriticalPossibility,
        skillParameter3: this.data.skillTime,
        mood: this.data.skillLove,
        fairyPower: this.data.elfPower,
        fairyPrecision: this.data.elfPrecision,
        fairyPierce: this.data.elfCriticalPossibility,
        fairyCriticalPossibility: this.data.elfCriticalPower,
        fairyCriticalPower: this.data.elfSkill,
        fairyChain: 0,
        haloPower: this.data.haloPower,
        haloPrecision: this.data.haloPrecision,
        haloPierce: 0,
        haloCriticalPossibility: this.data.haloCriticalPossibility,
        haloCriticalPower: 0,
        haloChain: 0,
        equ1Power: this.data.chainBoxNow.power,
        equ1Precision: this.data.chainBoxNow.precision,
        equ1Pierce: this.data.chainBoxNow.pierce,
        equ1CriticalPossibility: this.data.chainBoxNow.criticalPossibility,
        equ1CriticalPower: this.data.chainBoxNow.criticalPower,
        equ1Chain: this.data.chainBoxNow.chain,
        equ2Power: this.data.armorPiercingBulletNow.power,
        equ2Precision: this.data.armorPiercingBulletNow.precision,
        equ2Pierce: this.data.armorPiercingBulletNow.pierce,
        equ2CriticalPossibility: this.data.armorPiercingBulletNow.criticalPossibility,
        equ2CriticalPower: this.data.armorPiercingBulletNow.criticalPower,
        equ2Chain: this.data.armorPiercingBulletNow.chain,
        equ3Power: this.data.telescopicSelected123[0].power,
        equ3Precision: this.data.telescopicSelected123[0].precision,
        equ3Pierce: this.data.telescopicSelected123[0].pierce,
        equ3CriticalPossibility: this.data.telescopicSelected123[0].criticalPossibility,
        equ3CriticalPower: this.data.telescopicSelected123[0].criticalPower,
        equ3Chain: this.data.telescopicSelected123[0].chain,
        equ4Power: this.data.telescopicSelected123[1].power,
        equ4Precision: this.data.telescopicSelected123[1].precision,
        equ4Pierce: this.data.telescopicSelected123[1].pierce,
        equ4CriticalPossibility: this.data.telescopicSelected123[1].criticalPossibility,
        equ4CriticalPower: this.data.telescopicSelected123[1].criticalPower,
        equ4Chain: this.data.telescopicSelected123[1].chain,
        equ5Power: this.data.telescopicSelected123[2].power,
        equ5Precision: this.data.telescopicSelected123[2].precision,
        equ5Pierce: this.data.telescopicSelected123[2].pierce,
        equ5CriticalPossibility: this.data.telescopicSelected123[2].criticalPossibility,
        equ5CriticalPower: this.data.telescopicSelected123[2].criticalPower,
        equ5Chain: this.data.telescopicSelected123[2].chain,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        if (res.data.status == 0) {
          let str=JSON.stringify(that.data.telescopicSelected123[res.data.value-1])
          wx.navigateTo({
            url: '../submit/submit?jsonStr=' + str,
            success: (res)=>{
              console.log(res)
            },
            fail: ()=>{},
            complete: ()=>{}
          });
        } else {
          wx.showToast({
            title: '至少选择一个喵具',
            icon: 'none'
          })
        }
      },
      fail (res) {
        wx.showToast({
          title: '网络故障',
          icon: 'none'
        })
        console.log(res.data)
      }
    })
  },
  reset: function(e) {
    let temp = this.data.telescopicSelected
    let tempType = this.data.telescopicTypeSelected
    if (temp.length == 0) {
      wx.showToast({
        title: '没有了哦',
        icon: 'none'
      })
    } else {
      temp.pop()
      tempType.pop()
      this.setData({
        telescopicSelected: temp,
        telescopicTypeSelected: tempType
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function (options) {
    console.log("onLoad")
    // 初期加载过程
    //@
    //@@
    //@@@
    //@@@@
    // 设置地图列表
    let temp = []
    console.log(this.data.map)
    this.data.map.forEach(element => {
      if (temp.indexOf(element.info) < 0) {
        temp.push(element.info)
      }
    })
    this.setData({
      mapInfoArray: temp
    })
    // 设置关卡列表
    temp = []
    this.data.map.forEach(element => {
      if (element.info == this.data.mapInfo) {
        temp.push(element)
      }
    })
    this.setData({
      mapFiltedArray: temp
    })
    // 设置人型分类列表
    temp = []
    this.data.people.forEach(element => {
      if (temp.indexOf(element.type) < 0) {
        temp.push(element.type)
      }
    })
    this.setData({
      peopleTypeArray: temp
    })
    // 设置人形筛选列表
    temp = []
    this.data.people.forEach(element => {
      if (element.type == this.data.peopleType) {
        temp.push(element)
      }
    })
    this.setData({
      peopleFiltedArray: temp
    })
    // 设置瞄准镜
    this.setData({
      telescopicNow: this.data.telescopic.redPoint
    })
  },
  onShow: function () {
    
  },
  mapInfoPickerChange: function(e) {
    this.setData({
      mapInfo: this.data.mapInfoArray[e.detail.value],
    })
    // 设置关卡列表
    let temp = []
    this.data.map.forEach(element => {
      if (element.info == this.data.mapInfo) {
        temp.push(element)
      }
    })
    this.setData({
      mapFiltedArray: temp
    })
    this.setData({
      mapName: this.data.mapFiltedArray[0].name,
      mapNow: this.data.mapFiltedArray[0]
    })
  },
  mapNamePickerChange: function(e) {
    this.setData({
      mapName: this.data.mapFiltedArray[e.detail.value].name,
      mapNow: this.data.mapFiltedArray[e.detail.value]
    })
  },
  peopleTypePickerChange: function(e) {
    this.setData({
      peopleType: this.data.peopleTypeArray[e.detail.value],
    })
    // 设置关卡列表
    let temp = []
    this.data.people.forEach(element => {
      if (element.type == this.data.peopleType) {
        temp.push(element)
      }
    })
    this.setData({
      peopleFiltedArray: temp
    })
    this.setData({
      peopleName: this.data.peopleFiltedArray[0].name,
      peopleNow: this.data.peopleFiltedArray[0]
    })
  },
  peopleNamePickerChange: function(e) {
    this.setData({
      peopleName: this.data.peopleFiltedArray[e.detail.value].name,
      peopleNow: this.data.peopleFiltedArray[e.detail.value]
    })
  },
  chainNamePickerChange: function(e) {
    this.setData({
      chainBoxNow: this.data.chainBox[e.detail.value]
    })
  },
  armorPiercingBulletNamePickerChange: function(e) {
    this.setData({
      armorPiercingBulletNow: this.data.armorPiercingBullet[e.detail.value]
    })
  },
  telescopicRadioChange: function(e) {
    if (e.detail.value == 'redPoint') {
      this.setData({
        telescopicNow: this.data.telescopic.redPoint
      })
    } else if (e.detail.value == 'holographic') {
      this.setData({
        telescopicNow: this.data.telescopic.holographic
      })
    } else {
      this.setData({
        telescopicNow: this.data.telescopic.optics
      })
    }
    this.setData({
      telescopicRadioValueNow: e.detail.value
    })
  },
  chooseTelescopic: function(e) {
    let temp = this.data.telescopicSelected
    let tempType = this.data.telescopicTypeSelected
    // 瞄准镜的数量已经够了
    if (temp.length >= 3) {
      wx.showToast({
        title: '最多添加3个瞄准镜',
        icon: 'none'
      })
    } else {
      // 判断该种类的瞄准镜是否已被添加
      let canAdd = true
      this.data.telescopicTypeSelected.forEach(element => {
        if (element == e.currentTarget.dataset.type) {
          wx.showToast({
            title: '该类型的瞄准镜已被添加',
            icon: 'none'
          })
          canAdd = false
        }
      });
      if (canAdd) {
        temp.push(this.data.telescopicNow[e.currentTarget.dataset.index])
        tempType.push(e.currentTarget.dataset.type)
        this.setData({
          telescopicSelected: temp,
          telescopicTypeSelected: tempType
        })
      }
    }
  },
  skillRadioChange: function(e) {
    this.setData({
      skillNow: e.detail.value
    })
  },
  onHide: function() {
    console.log("onHide")
  },
  onUnload: function () {
    console.log("onUpload")
  },
  // 按键双向绑定部分
  peoplePowerChange: function(e) {
    let temp = this.data.peopleNow
    temp.attack = e.detail.value
    this.setData({
      peopleNow: temp
    })
  },
  peoplePrecisionChange: function(e) {
    let temp = this.data.peopleNow
    temp.piercingArmor = e.detail.value
    this.setData({
      peopleNow: temp
    })
  },
  peoplePierceChange: function(e) {
    let temp = this.data.peopleNow
    temp.armourPiercing = e.detail.value
    this.setData({
      peopleNow: temp
    })
  },
  peopleCriticalPossibilityChange: function(e) {
    let temp = this.data.peopleNow
    temp.violentAttack = e.detail.value
    this.setData({
      peopleNow: temp
    })
  },
  peopleCriticalPowerChange: function(e) {
    let temp = this.data.peopleNow
    temp.detonatingInjury = e.detail.value
    this.setData({
      peopleNow: temp
    })
  },
  peopleChainChange: function(e) {
    let temp = this.data.peopleNow
    temp.belt = e.detail.value
    this.setData({
      peopleNow: temp
    })
  },
  skillPrecisionChange: function(e) {
    this.setData({
      skillPrecision: e.detail.value
    })
  },
  skillCriticalPossibilityChange: function(e) {
    this.setData({
      skillCriticalPossibility: e.detail.value
    })
  },
  skillTimeChange: function(e) {
    this.setData({
      skillTime: e.detail.value
    })
  },
  skillLoveChange: function(e) {
    this.setData({
      skillLove: e.detail.value
    })
  },
  elfPowerChange: function(e) {
    this.setData({
      elfPower: e.detail.value
    })
  },
  elfPrecisionChange: function(e) {
    this.setData({
      elfPrecision: e.detail.value
    })
  },
  elfCriticalPossibilityChange: function(e) {
    this.setData({
      elfCriticalPossibility: e.detail.value
    })
  },
  elfCriticalPowerChange: function(e) {
    this.setData({
      elfCriticalPower: e.detail.value
    })
  },
  elfSkillChange: function(e) {
    this.setData({
      elfSkill: e.detail.value
    })
  },
  haloPowerChange: function(e) {
    this.setData({
      haloPower: e.detail.value
    })
  },
  haloPrecisionChange: function(e) {
    this.setData({
      haloPrecision: e.detail.value
    })
  },
  haloCriticalPossibilityChange: function(e) {
    this.setData({
      haloCriticalPossibility: e.detail.value
    })
  },
  chainBoxPowerChange: function(e) {
    let temp = this.data.chainBoxNow
    temp.power = e.detail.value
    this.setData({
      chainBoxNow: temp
    })
  },
  chainBoxPrecisionChange: function(e) {
    let temp = this.data.chainBoxNow
    temp.precision = e.detail.value
    this.setData({
      chainBoxNow: temp
    })
  },
  chainBoxCriticalPossibilityChange: function(e) {
    let temp = this.data.chainBoxNow
    temp.criticalPossibility = e.detail.value
    this.setData({
      chainBoxNow: temp
    })
  },
  chainBoxCriticalPowerChange: function(e) {
    let temp = this.data.chainBoxNow
    temp.criticalPower = e.detail.value
    this.setData({
      chainBoxNow: temp
    })
  },
  chainBoxPierceChange: function(e) {
    let temp = this.data.chainBoxNow
    temp.pierce = e.detail.value
    this.setData({
      chainBoxNow: temp
    })
  },
  chainBoxChainChange: function(e) {
    let temp = this.data.chainBoxNow
    temp.chain = e.detail.value
    this.setData({
      chainBoxNow: temp
    })
  },
  armorPiercingBulletPowerChange: function(e) {
    let temp = this.data.armorPiercingBulletNow
    temp.power = e.detail.value
    this.setData({
      armorPiercingBulletNow: temp
    })
  },
  armorPiercingBulletPrecisionChange: function(e) {
    let temp = this.data.armorPiercingBulletNow
    temp.precision = e.detail.value
    this.setData({
      armorPiercingBulletNow: temp
    })
  },
  armorPiercingBulletPierceChange: function(e) {
    let temp = this.data.armorPiercingBulletNow
    temp.pierce = e.detail.value
    this.setData({
      armorPiercingBulletNow: temp
    })
  },
  armorPiercingBulletCriticalPossibilityChange: function(e) {
    let temp = this.data.armorPiercingBulletNow
    temp.criticalPossibility = e.detail.value
    this.setData({
      armorPiercingBulletNow: temp
    })
  },
  armorPiercingBulletCriticalPowerChange: function(e) {
    let temp = this.data.armorPiercingBulletNow
    temp.criticalPower = e.detail.value
    this.setData({
      armorPiercingBulletNow: temp
    })
  },
  armorPiercingBulletChainChange: function(e) {
    let temp = this.data.armorPiercingBulletNow
    temp.chain = e.detail.value
    this.setData({
      armorPiercingBulletNow: temp
    })
  },
})
