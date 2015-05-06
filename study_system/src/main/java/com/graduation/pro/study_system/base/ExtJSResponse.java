package com.graduation.pro.study_system.base;
import java.util.HashMap;
/**
 * used to integrates with ExtJS 4.x data stores.<br>
 * In ExtJS, the data store use following format to verify the result:
 * 
 * <pre>
 *  "{"success":false,"data":"","message":"VERBOSE ERROR"}"
 * </pre>
 * 
 * 
 */
public class ExtJSResponse extends HashMap<String, Object> {

	private static final long serialVersionUID = -2791356338016228077L;

	public ExtJSResponse() {

	}

	public ExtJSResponse(boolean success) {
		super();
		setSuccess(success);
	}

	public static ExtJSResponse success() {
		return new ExtJSResponse(true);
	}

	public static ExtJSResponse successRes4Find(Object data, Integer total) {
		ExtJSResponse res = new ExtJSResponse(true);
		res.setData(data);
		res.put("total", total);
		return res;
	}

	public static ExtJSResponse successResWithData(Object data) {
		ExtJSResponse res = new ExtJSResponse(true);
		res.setData(data);
		return res;
	}

	public static ExtJSResponse errorRes(String error) {
		ExtJSResponse res = new ExtJSResponse(false);
		res.setErrorMsg(error);
		return res;
	}

	public void setData(Object data) {
		put("data", data);
	}

	public Object getData() {
		return get("data");
	}

	public boolean isSuccess() {
		return (Boolean) get("success");
	}

	public void setSuccess(boolean success) {
		put("success", success);
	}

	public void setErrorMsg(String errorMsg) {
		put("error", errorMsg);
	}

	public String getErrorMsg() {
		return (String) get("error");
	}
}