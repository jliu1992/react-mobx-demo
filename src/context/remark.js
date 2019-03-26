import { observable, action } from "mobx";

class Remark {
  constructor() {
    this.remarks = observable(["1", "2"]);
    this.addRemark = action(this.addRemark);
    this.deleteRemark = action(this.deleteRemark);
  }

  addRemark(remark) {
    this.remarks.push(remark);
  }

  deleteRemark(remark) {
    const index = this.remarks.indexOf(remark);
    this.remarks.splice(index, 1);
  }
}

export default new Remark();
