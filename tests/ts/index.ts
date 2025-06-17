import { CrossLangWrapperTest } from "crosslang-wrapper-test";

const wrapper = new CrossLangWrapperTest('sk_test_5677');

wrapper.isServerAlive().then(console.log);
wrapper.runTest().then(console.log);