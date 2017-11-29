package controller;

import java.util.Date;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {
	
	@RequestMapping(value="/hello.do")
	public ModelAndView executeHello(){
		ModelAndView mv = new ModelAndView();
		
		mv.addObject("msg","º¹½À");
		mv.addObject("now",new Date());
		
		mv.setViewName("my_hello");
		
		return mv;
		
	}
}
