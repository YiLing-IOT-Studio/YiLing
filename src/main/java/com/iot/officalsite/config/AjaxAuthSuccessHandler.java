package com.iot.officalsite.config;

import net.sf.json.JSONObject;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by 李攀 on 2018/1/11.
 */
public class AjaxAuthSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        //response.setStatus(HttpServletResponse.SC_OK);

        boolean isAjax = UnauthorizedEntryPoint.isAjaxRequest(request);

        if (isAjax) {
            String principal = authentication.getPrincipal().toString();
            JSONObject returnObj = new JSONObject();
            returnObj.put("status", "1");
            returnObj.put("data", principal);
            response.getWriter().print(returnObj.toString());
            response.getWriter().flush();
        } else {
            super.onAuthenticationSuccess(request,response,authentication);
        }
    }
}
