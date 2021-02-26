import { expect } from 'chai';
import { SampleClass } from '../models/sample-class';

describe('Testing SampleClass getName Method', () => {
	it('should return "I am a sampleClass"', () => {
		let sampleClass: SampleClass = new SampleClass();
		const myNameResult: String = sampleClass.getName();
		expect(myNameResult).to.equal('I am a sampleClass');
	});
});
