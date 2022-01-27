import React from "react";
import { shallow, mount } from "enzyme";
import Todo from "../Todo"

describe("Todo", () => {

    it("renders", () => {
        shallow(<Todo />);
    });
    it("displays initial to-dos", () => {
        const wrapper = mount(<Todo />);
        expect(wrapper.find("li")).toHaveLength(2);
    });
    it("adds a new item", () => {
        const wrapper = mount(<Todo />);
        wrapper.find("input").instance().value = "watch";
        expect(wrapper.find("input").instance().value).toEqual("watch");
        wrapper.find('[type="submit"]').simulate("click");
        expect(wrapper.find("li")).toHaveLength(3);
        expect(
            wrapper
                .find("li div span")
                .last()
                .text()
        ).toEqual("watch");
    });
    it("removes an item", () => {
        const wrapper = mount(<Todo />);
        wrapper
            .find("li button")
            .first()
            .simulate("click");
        expect(wrapper.find("li")).toHaveLength(1);
        expect(wrapper.find("li span").map(item => item.text())).toEqual([
            "coffee"
        ]);
    });
    // it("update an item", () => {
    //     const wrapper = mount(<Todo />);
    //     wrapper
    //         .find("li button")
    //         .first()
    //         .simulate("click");
    //     expect(wrapper.find("li")).toHaveLength(1);
    //     wrapper.find("input").instance().value = "watch";
    //     expect(wrapper.find("input").instance().value).toEqual("watch");
    //     wrapper.find('[type="submit"]').simulate("click");

    //     expect(
    //         wrapper
    //             .find("li div span")
    //             .first()
    //             .text()
    //     ).toEqual("css");
    //     // expect(wrapper.find("li span").map(item => item.text())).toEqual([
    //     //     "coffee"
    //     // ]);
    // });
});

